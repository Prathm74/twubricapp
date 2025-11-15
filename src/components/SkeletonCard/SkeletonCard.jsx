import "./SkeletonCard.css";

const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-avatar shimmer"></div>

      <div className="skeleton-lines">
        <div className="skeleton-line shimmer short"></div>
        <div className="skeleton-line shimmer"></div>
      </div>

      <div className="skeleton-stats">
        <div className="skeleton-line shimmer"></div>
        <div className="skeleton-line shimmer"></div>
        <div className="skeleton-line shimmer"></div>
      </div>

      <div className="skeleton-btn shimmer"></div>
    </div>
  );
};

export default SkeletonCard;
