const ReviewInsights: React.FC = () => {
  return (
    <>
      <div className="review-insights-components">
        <div className="main text-sm mt-2">
          {/* Recent Changes */}
          <div className="mb-4">
            <h3 className="font-medium text-gray-600">Recent Changes:</h3>
            <p className="text-gray-500">
              Revised Scope of Services, Updated Payment Terms
            </p>
          </div>

          {/* Currently Redlined & Highlighted Clauses */}
          <div className="mb-4">
            <h3 className="font-medium text-gray-600">
              Currently Redlined & Highlighted Clauses:
            </h3>
            <div className="flex gap-3 mt-1 text-gray-500">
              <span className="flex items-center gap-1">
                <span className="text-green-600">✔</span> Confidentiality
              </span>
              <span className="flex items-center gap-1">
                <span className="text-yellow-500">⚠</span> Liability
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-600">✔</span> Termination
              </span>
            </div>
          </div>

          {/* Primary Reviewers */}
          <div className="mb-4">
            <h3 className="font-medium text-gray-600">Primary Reviewers:</h3>
            <p className="flex items-center gap-2 text-gray-500 space-x-2">
              <span className="flex items-center gap">
                <span className="text-orange-500">👤</span> Rick
              </span>
              <span className="flex items-center">
                <span className="text-orange-500">👤</span> Lisa
              </span>
              <span className="flex items-center">
                <span className="text-orange-500">👤</span> Mike (Counterparty)
              </span>
            </p>
          </div>

          {/* Non-Standard or High-Risk Aspects */}
          <div className="mb-4">
            <h3 className="font-medium text-gray-600">
              Non-Standard or High-Risk Aspects:
            </h3>
            <ul className="list-disc pl-5 text-gray-500 mt-2 space-y-2">
              <li>
                <span className="text-red-500">🚩</span> Inclusion of an
                expedited scope review clause to accommodate unforeseen
                regulatory challenges.
                <a href="#" className="text-blue-500 hover:underline">
                  #HighRisk
                </a>
              </li>
              <li>
                <span className="text-red-500">🚩</span> Late penalties
                exceeding industry standard (2.5% of total contract value per
                delayed deliverable).
                <a href="#" className="text-blue-500 hover:underline">
                  #Penalties
                </a>
              </li>
            </ul>
          </div>

          {/* Documents being Reviewed */}
          <div>
            <h3 className="font-medium text-gray-600">
              Documents being Reviewed:
            </h3>
            <ul className="list-disc pl-5 text-gray-500 mt-2 space-y-1">
              <li>
                Draft Contract Agreement v2.3
                <span className="text-sm text-gray-400">
                  (Updated February 10, 2024)
                </span>
              </li>
              <li>
                Scope of Work v3.0
                <span className="text-sm text-gray-400">
                  (Last Updated March 1, 2024)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewInsights;
