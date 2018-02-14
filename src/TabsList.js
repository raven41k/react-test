import React, { Component } from 'react';
import './App.css';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

class TabsList extends Component {
  render() {
    return (
    <TableBody>
        <TableRow>
            <TableCell>{this.props.id} </TableCell>
            <TableCell>{this.props.title} </TableCell>
            <TableCell>{this.props.order} </TableCell>
            <TableCell>{this.props.path} </TableCell>
        </TableRow>
    </TableBody>
    );
  }
}

export default TabsList;
