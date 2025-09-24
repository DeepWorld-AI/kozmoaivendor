const ContractHighLights: React.FC = () => {
  return (
    <>
      <div className="contract-highlights-component">
        <div className="main mt-2 text-sm">
          <ul className="list-disc pl-5 text-gray-500 space-y-4">
            {/* Parties Involved */}
            <li>
              <h3 className="font-medium text-gray-600">Parties Involved:</h3>
              <ul className="list-none pl-5 space-y-1">
                <li>○ Ricondo (Contractor)</li>
                <li>
                  ○ Chicago O’Hare and Midway International Airports (Client)
                </li>
              </ul>
            </li>

            {/* Purpose */}
            <li>
              <h3 className="font-medium text-gray-600">Purpose:</h3>
              <p>
                Comprehensive planning, including facilities, environmental, and
                financial consulting services for strategic airport development.
              </p>
            </li>

            {/* Key Provisions */}
            <li>
              <h3 className="font-medium text-gray-600">Key Provisions:</h3>
              <ul className="list-none pl-5 space-y-1">
                <li>○ Monthly progress reporting on milestones</li>
                <li>
                  ○ Detailed financial forecasting with 95% accuracy requirement
                </li>
                <li>
                  ○ Adherence to FAA and EPA guidelines in all environmental
                  assessments
                  <a href="#" className="text-blue-500 hover:underline">
                    (#RegulatoryCompliance)
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ContractHighLights;
