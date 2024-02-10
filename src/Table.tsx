import { CSSProperties } from 'react';
import React from 'react';
import data from './data/stuff.json'
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Table.css'

type RowItem = {
	_id: string;
	index: number;
	name: string;
	gender: string;
	company: string;
	registered: string;
};

type DataTable = RowItem[];


const TableRow = ({  index, style, data  }: ListChildComponentProps<DataTable>): React.JSX.Element => {
	const item:RowItem = data[index];
	console.log("rendering row", item.index);
	return (
		<Row style={style}>
			<Col>{item.index}</Col>
			<Col>{item.name}</Col>
			<Col>{item.company}</Col>
		</Row>
	);
}

export const Table = (): React.JSX.Element => {
	return (
		<Container className="Table">
			<FixedSizeList
		    height={500}
  		  width={"90%"}
				itemSize={30}
    		itemCount={data.length}
				itemData={data}
  		>
  		  {TableRow}
  		</FixedSizeList>
    </Container>
	);
}
