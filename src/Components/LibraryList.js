import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {

        renderRow({item}) {
            return <Text>{item.title}</Text>
        }

        render() {

        console.log(this.props)
        return (
        <FlatList
            data={this.props.Libraries}
            renderItem={this.renderRow}
        />
        )
    }
}


const mapStateToProps = state => {
    return { Libraries: state.libraries }
}

export default connect(mapStateToProps)(LibraryList);