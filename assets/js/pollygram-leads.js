/**
 * Pollygram — shared lead helpers for storefront + Supabase inserts.
 * Configure from index.html after Supabase constants exist.
 */
(function (global) {
  var cfg = {
    getSupabaseClient: null,
    isSupabaseConfigured: function () {
      return false;
    }
  };

  function configure(options) {
    if (options && typeof options.getSupabaseClient === 'function')
      cfg.getSupabaseClient = options.getSupabaseClient;
    if (options && typeof options.isSupabaseConfigured === 'function')
      cfg.isSupabaseConfigured = options.isSupabaseConfigured;
  }

  function getDeviceType() {
    try {
      var w = global.innerWidth || 0;
      if (w < 640) return 'mobile';
      if (w < 1024) return 'tablet';
      return 'desktop';
    } catch (e) {
      return 'unknown';
    }
  }

  function getPageSource() {
    try {
      return (
        global.location.pathname +
        (global.location.search || '') +
        (global.location.hash || '')
      );
    } catch (e2) {
      return '';
    }
  }

  function timelineEntry(note, type) {
    return {
      at: new Date().toISOString(),
      note: note || '',
      type: type || 'system'
    };
  }

  /**
   * Normalizes a partial lead into columns expected by public.leads inserts.
   */
  function normalizeLeadRow(partial) {
    var p = partial || {};
    var productsLine =
      typeof p.products === 'string'
        ? p.products
        : Array.isArray(p.products)
          ? p.products.join('; ')
          : '';
    var tl = Array.isArray(p.timeline) ? p.timeline.slice() : [];
    if (!tl.length) tl.push(timelineEntry('Lead captured', 'system'));

    return {
      full_name: String(p.customer_name || p.full_name || '').trim(),
      organisation: String(p.institution_name || p.organisation || '').trim(),
      phone: String(p.phone || '').trim(),
      email: String(p.email || '').trim(),
      products: productsLine,
      message: String(p.message || '').trim(),
      source: String(p.source || 'site').trim(),
      status: String(p.status || 'new').trim(),
      estimated_value:
        typeof p.estimated_value === 'number' && isFinite(p.estimated_value)
          ? p.estimated_value
          : parseFloat(p.estimated_value) || 0,
      assigned_to: String(p.assigned_to || '').trim(),
      lead_category: String(p.lead_category || p.category || '').trim(),
      page_source: String(p.page_source || getPageSource()),
      device_type: String(p.device_type || getDeviceType()),
      products_json: p.products_json != null ? p.products_json : [],
      quantities_json: p.quantities_json != null ? p.quantities_json : [],
      meta: typeof p.meta === 'object' && p.meta ? p.meta : {},
      timeline: tl,
      internal_notes: String(p.internal_notes || '').trim(),
      delivery_county: String(p.delivery_county || p.county || '').trim()
    };
  }

  function rowForSupabase(normalized) {
    var meta = Object.assign({}, normalized.meta || {});
    meta.device_type = normalized.device_type;
    meta.page_source = normalized.page_source;
    return {
      full_name: normalized.full_name,
      organisation: normalized.organisation,
      phone: normalized.phone,
      email: normalized.email || null,
      products: normalized.products,
      message: normalized.message,
      source: normalized.source,
      status: normalized.status,
      estimated_value: normalized.estimated_value,
      assigned_to: normalized.assigned_to || null,
      lead_category: normalized.lead_category || null,
      page_source: normalized.page_source,
      device_type: normalized.device_type,
      products_json: normalized.products_json,
      quantities_json: normalized.quantities_json,
      meta: meta,
      timeline: normalized.timeline,
      internal_notes: normalized.internal_notes || null,
      delivery_county: normalized.delivery_county || null,
      updated_at: new Date().toISOString()
    };
  }

  function buildWhatsAppLeadPayload(productCtx, extra) {
    var x = extra || {};
    var qty = Math.max(1, parseInt(x.quantity, 10) || 1);
    var name = productCtx && productCtx.name ? String(productCtx.name) : 'Product';
    var cat =
      productCtx && productCtx.category_label
        ? String(productCtx.category_label)
        : productCtx && productCtx.category
          ? String(productCtx.category)
          : '';
    var pid = productCtx && productCtx.id != null ? String(productCtx.id) : '';
    var summary = name + (qty > 1 ? ' × ' + qty : '');
    return normalizeLeadRow({
      full_name: '',
      organisation: '',
      phone: '',
      products: summary,
      message: '',
      source: String(x.source || 'whatsapp_button'),
      status: 'new',
      lead_category: cat,
      products_json: [{ id: pid, name: name, quantity: qty }],
      meta: {
        whatsapp_intent: true,
        product_id: pid,
        quantity: qty,
        wa_source_detail: x.source_detail || ''
      },
      timeline: [
        timelineEntry('WhatsApp tap logged (' + (x.source_detail || 'product') + ')', 'whatsapp')
      ]
    });
  }

  async function insertLead(partial) {
    var normalized = normalizeLeadRow(partial);
    var row = rowForSupabase(normalized);
    if (!cfg.isSupabaseConfigured() || !cfg.getSupabaseClient) {
      return { ok: false, skipped: true };
    }
    var client = cfg.getSupabaseClient();
    if (!client) return { ok: false, skipped: true };
    try {
      var res = await client.from('leads').insert(row);
      if (res.error) throw res.error;
      return { ok: true };
    } catch (err) {
      console.warn('[PollygramLeads] insert failed', err && err.message ? err.message : err);
      return { ok: false, error: err };
    }
  }

  global.PollygramLeads = {
    configure: configure,
    getDeviceType: getDeviceType,
    getPageSource: getPageSource,
    normalizeLeadRow: normalizeLeadRow,
    rowForSupabase: rowForSupabase,
    buildWhatsAppLeadPayload: buildWhatsAppLeadPayload,
    insertLead: insertLead,
    timelineEntry: timelineEntry
  };
})(typeof window !== 'undefined' ? window : this);
