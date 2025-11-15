import "./EmptyState.css";

const EmptyState = ({ onReset }) => {
  return (
    <div className="empty-container">
      <img
        src="https://cdn-icons-png.flaticon.com/512/4076/4076500.png"
        alt="No Data"
        className="empty-image"
      />

      <h2>No Users Found</h2>
      <p>Try adjusting your filters or sorting options.</p>

      {onReset && (
        <button className="reset-btn" onClick={onReset}>
          Reset Filters
        </button>
      )}
    </div>
  );
};

export default EmptyState;
