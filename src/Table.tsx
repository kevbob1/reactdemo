import React from 'react';
import data from './data/stuff.json'

type RowItem = {
	_id: string;
	index: number;
	name: string;
	gender: string;
	company: string;
	registered: string;
};

type DataTable = {
	items: RowItem[];
};


const TableRow = ({ item }: {item:RowItem}): React.JSX.Element => {
	return (
		<tr>
			<td>{item.index}</td>
			<td>{item.name}</td>
			<td>{item.company}</td>
		</tr>
	);
}

export const Table = (): React.JSX.Element => {
	const clzz = '';
	return (
	  <table className='table table-primary'>
			<tbody>
				{data.map((item: RowItem) => <TableRow item={item} key={item._id} />)}
			</tbody>
    </table>
	);
}
