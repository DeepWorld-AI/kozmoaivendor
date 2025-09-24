const ActivityTimeline: React.FC = () => {
  return (
    <>
      <div className="activity-timeline-component">
        <div className="main mt-2 text-sm">
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>- Contract drafted on: January 10, 2024</li>
            <li>- Initial Legal Review completed on: January 15, 2024</li>
            <li>- Internal Review initiated on: February 1, 2024</li>
          </ul>
          <h3 className="text-md font-medium text-gray-800 mt-6">
            Key Milestones Achieved:
          </h3>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li>- Scope of Services finalized</li>
            <li>- Initial payment terms agreed</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ActivityTimeline;
