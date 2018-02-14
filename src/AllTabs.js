import React, { Component } from 'react';
import './App.css';
import TabsList from './TabsList';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

class AllTabs extends Component {
  render() {
      console.log(this.props.tabs);
    return (
      <div className="allTabs">
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell> ID </TableCell>
                    <TableCell> TITLE </TableCell>
                    <TableCell> ORDER </TableCell>
                    <TableCell> PATH </TableCell>
                </TableRow>
            </TableHead>
                {this.props.tabs.map( (item) =>
                <TabsList
                    id = {item.id}
                    key = {Date.now()}
                    order = {item.order}
                    title = {item.title}
                    path = {item.path}
                />
                )}
            </Table>
      </div>
    );
  }
}

export default AllTabs;
