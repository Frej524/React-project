import React from 'react';

export default class TableHeader extends React.Component {
        
        // This example is more resuable as changes in the data would only cause more headers to be rendered 
        
    render() {
        const titles = this.props.titles.map((item, i) => <th key={i}>{item}</th> )
        return (
                <tr>
                {titles}
                </tr>
                );
    }
}
