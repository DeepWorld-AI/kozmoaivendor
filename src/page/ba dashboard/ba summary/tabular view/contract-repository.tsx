import React from "react";

interface Column {
  header: string;
  key: string;
  render?: (value: any) => React.ReactNode;
}

interface ReviewInsightsTabularProps {
  columns: Column[];
  data: Record<string, any>[];
  className?: string;
}

const ContractRepositoryTabularView: React.FC<ReviewInsightsTabularProps> = ({
  columns,
  data,
  className = "",
}) => {
  return (
    <div className={`overflow-x-auto mt-4 ${className}`}>
      <table className="table-auto w-full border border-gray-300">
        <thead className="bg-gray-100 border border-gray-300">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-4 py-2 border border-gray-300 text-center text-sm font-medium text-gray-600"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className="px-4 py-3 border border-gray-300 text-center text-sm text-gray-700"
                >
                  {column.render
                    ? column.render(row[column.key])
                    : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContractRepositoryTabularView;
