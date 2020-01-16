import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardSection } from './common'
import * as actions from '../actions'
import {
    Text,
    View,
    TouchableWithoutFeedback,
    LayoutAnimation,
    UIManager,
    Platform
} from 'react-native';


class ListItem extends Component {
    renderDescription() {
        const { expanded, Library } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text>
                        {library.description}
                    </Text>
                </CardSection>
            )
        }
    }
    render() {
        const styles = {
         titleStyle: {
             fontSize: 18,
             paddingLeft: 15
         }
        }
        const { title, id } = this.props.library;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
            <View>
                <CardSection>
                <Text style={styles.titleStyle}>{title}</Text>
                </CardSection>
                {this.renderDescription()}
            </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default connect(mapStateToProps, actions)(ListItem);

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };
};