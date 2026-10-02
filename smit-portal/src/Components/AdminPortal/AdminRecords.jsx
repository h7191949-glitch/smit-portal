import React, { useState } from "react";
import Icon from "../Icon/Icon";

function RecordDialog({ dialog, config, onClose, onSubmit }) {
  const [draft, setDraft] = useState(() => dialog.record || config.fields.reduce((record, field) => ({
    ...record,
    ...(field.options ? { [field.key]: field.options[0] } : {}),
  }), {}));
  const isView = dialog.mode === "view";

  const updateField = (key, value) => {
    setDraft((current) => ({ ...current, [key]: value }));
  };

  return (
    <div className="admin-modal-backdrop" role="presentation">
      <section className="admin-modal" role="dialog" aria-modal="true" aria-labelledby="admin-modal-title">
        <header className="admin-modal-header">
          <div>
            <p className="admin-eyebrow">{config.title.toUpperCase()}</p>
            <h2 id="admin-modal-title">
              {isView ? "Record details" : dialog.mode === "edit" ? `Edit ${config.singular}` : `Add ${config.singular}`}
            </h2>
          </div>
          <button type="button" className="admin-icon-button" onClick={onClose} aria-label="Close dialog">
            <Icon name="close" size={20} />
          </button>
        </header>

        {isView ? (
          <dl className="admin-detail-grid">
            {config.fields.map((field) => (
              <div key={field.key}>
                <dt>{field.label}</dt>
                <dd>{draft[field.key] || "Not provided"}</dd>
              </div>
            ))}
          </dl>
        ) : (
          <form
            className="admin-record-form"
            onSubmit={(event) => {
              event.preventDefault();
              onSubmit(draft);
            }}
          >
            <div className="admin-form-grid">
              {config.fields.map((field) => (
                <label className={field.wide ? "wide" : ""} key={field.key}>
                  <span>{field.label}</span>
                  {field.options ? (
                    <select
                      value={draft[field.key] || field.options[0]}
                      onChange={(event) => updateField(field.key, event.target.value)}
                      required
                    >
                      {field.options.map((option) => <option key={option}>{option}</option>)}
                    </select>
                  ) : (
                    <input
                      type={field.type || "text"}
                      value={draft[field.key] || ""}
                      onChange={(event) => updateField(field.key, event.target.value)}
                      required
                    />
                  )}
                </label>
              ))}
            </div>
            <footer className="admin-modal-actions">
              <button type="button" className="admin-secondary-button" onClick={onClose}>Cancel</button>
              <button type="submit" className="admin-primary-button">{dialog.mode === "edit" ? "Save changes" : "Add record"}</button>
            </footer>
          </form>
        )}

        {isView && (
          <footer className="admin-modal-actions">
            <button type="button" className="admin-primary-button" onClick={onClose}>Done</button>
          </footer>
        )}
      </section>
    </div>
  );
}

function AdminRecords({ config, records, onSave, onDelete }) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All statuses");
  const [dateFilter, setDateFilter] = useState("");
  const [dialog, setDialog] = useState(null);

  const statusOptions = config.statusKey
    ? ["All statuses", ...new Set(records.map((record) => record[config.statusKey]).filter(Boolean))]
    : [];

  const visibleRecords = records.filter((record) => {
    const matchesSearch = Object.values(record).some((value) =>
      String(value).toLowerCase().includes(search.toLowerCase()),
    );
    const matchesStatus = !config.statusKey || statusFilter === "All statuses" || record[config.statusKey] === statusFilter;
    const matchesDate = !config.dateKey || !dateFilter || record[config.dateKey] === dateFilter;
    return matchesSearch && matchesStatus && matchesDate;
  });

  const handleDialogSubmit = (record) => {
    onSave({ ...record, id: dialog.record?.id });
    setDialog(null);
  };

  const handleDelete = (record) => {
    if (window.confirm(`Delete ${config.singular.toLowerCase()} "${record[config.primaryKey]}"?`)) {
      onDelete(record.id);
    }
  };

  return (
    <section className="admin-records-panel">
      <div className="admin-record-toolbar">
        <label className="admin-search-field">
          <Icon name="search" size={18} />
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder={config.searchPlaceholder || `Search ${config.title.toLowerCase()}...`}
            aria-label={`Search ${config.title.toLowerCase()}`}
          />
        </label>
        <div className="admin-record-filters">
          {config.statusKey && (
            <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} aria-label="Filter by status">
              {statusOptions.map((option) => <option key={option}>{option}</option>)}
            </select>
          )}
          {config.dateKey && (
            <input type="date" value={dateFilter} onChange={(event) => setDateFilter(event.target.value)} aria-label="Filter by date" />
          )}
          {config.canAdd && (
            <button type="button" className="admin-primary-button admin-add-button" onClick={() => setDialog({ mode: "add" })}>
              <Icon name="plus" size={17} /> Add {config.singular}
            </button>
          )}
        </div>
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              {config.columns.map((column) => <th scope="col" key={column.key}>{column.label}</th>)}
              <th scope="col" className="admin-actions-heading">Actions</th>
            </tr>
          </thead>
          <tbody>
            {visibleRecords.map((record) => (
              <tr key={record.id}>
                {config.columns.map((column) => (
                  <td key={column.key} data-label={column.label}>
                    {column.key === config.statusKey ? (
                      <span className={`admin-status ${String(record[column.key]).toLowerCase().replace(/\s+/g, "-")}`}>{record[column.key]}</span>
                    ) : column.key === "attendance" ? `${record[column.key]}%` : record[column.key]}
                  </td>
                ))}
                <td data-label="Actions" className="admin-actions-cell">
                  <div className="admin-row-actions">
                    <button type="button" className="admin-icon-button" onClick={() => setDialog({ mode: "view", record })} aria-label={`View ${record[config.primaryKey]}`} title="View">
                      <Icon name="eye" size={18} />
                    </button>
                    <button type="button" className="admin-icon-button" onClick={() => setDialog({ mode: "edit", record })} aria-label={`Edit ${record[config.primaryKey]}`} title="Edit">
                      <Icon name="edit" size={17} />
                    </button>
                    <button type="button" className="admin-icon-button danger" onClick={() => handleDelete(record)} aria-label={`Delete ${record[config.primaryKey]}`} title="Delete">
                      <Icon name="trash" size={17} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {visibleRecords.length === 0 && (
              <tr><td className="admin-empty-state" colSpan={config.columns.length + 1}>No matching records found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="admin-table-footer">Showing {visibleRecords.length} of {records.length} records</div>

      {dialog && <RecordDialog key={`${dialog.mode}-${dialog.record?.id || "new"}`} dialog={dialog} config={config} onClose={() => setDialog(null)} onSubmit={handleDialogSubmit} />}
    </section>
  );
}

export default AdminRecords;