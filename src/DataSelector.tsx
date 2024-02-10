
import React from 'react';
import WindowedSelect from 'react-windowed-select';
import data from './data/stuff.json'

type RowItem = {
	_id: string;
	index: number;
	name: string;
	gender: string;
	company: string;
	registered: string;
};

type DataTable = RowItem[];

const colourOptions = data.map((item:RowItem) => {
	return {
		value: item._id,
		label: item.name
	}
});

const defaultOptions = colourOptions.slice(0, 300);


export const DataSelector =  () => (
  <WindowedSelect
		defaultValue={ defaultOptions}
    isMulti
    name="colors"
		windowThreshold={3}
    options={colourOptions}
    className="bms-select"
    classNamePrefix="bms"
  />
);
