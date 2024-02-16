import React from 'react'

export const Table = ({row,heading,}) => {
  return (
   <>
    <table>

    <thead>
        {
            heading.map((item)=>(
                <th key={item.title}>
                    {
                        item.title
                    }
                </th>
            ))
        }
    </thead>
    <tbody>
        {
            row.map((item)=>(
                <tr key={item.title}>
                    <td>{item.title}</td>
                </tr>
            ))
        }
    </tbody>
    </table>
   </>
  )
}
