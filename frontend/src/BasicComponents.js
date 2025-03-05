export function Button({name, type}) {
  return (
    <button className="button" type={type}>
      {name}
    </button>
  );
}

export function Input({placeholder, type = "text", value, onChange}) {
  return (
    <input 
      className="input"
      placeholder={placeholder} 
      type={type}
      value={value}
      onChange={onChange}/>
  );
}

// TODO DdeixAR MAIS REUSÁVEL
// function Table({ data, columns }) {
//   return (
//     <table>
//       <thead>
//         <tr>
//           {columns.map((column) => (
//             <th key={column.key}>{column.header}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((row) => (
//           <tr key={row.id}>
//             {columns.map((column) => (
//               <td key={column.key}>{row[column.key]}</td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }
export function Table({participations}) {
  return (
    <table className='table-participation'>
      <thead>
        <tr>
          <th></th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Participation</th>
        </tr>
      </thead>
      <tbody>
        {participations.map(participation => (
          <tr key={participation.id}>
            <td>{participation.id}</td>
            <td>{participation.first_name}</td>
            <td>{participation.last_name}</td>
            <td>{participation.participation_pct}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}