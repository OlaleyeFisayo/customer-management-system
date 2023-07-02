import TableData from "../tableData";

export default function Table({ className }) {
  return (
    <div className={className}>
      <table>
        <thead></thead>
        <tbody>
          <TableData />
        </tbody>
      </table>
    </div>
  );
}
