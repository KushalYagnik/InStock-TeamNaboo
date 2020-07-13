import React from 'react';
import kebabIcon from '../../assets/Icons/SVG/Icon-kebab-default.svg';
import './InventoryKebabMenu.scss';

export default class InventoryKebabMenu extends React.Component {
    state = {
        isActive: false,
    }

    buttonToggle = () => {
        if (this.state.isActive === false) {
            this.setState({
                isActive: true
            })
        }
        
        else {
            this.setState({
                isActive: false 
            })
        }
    }

    render() {
        return (
            <div className="kebab-menu">
                <button className="kebab-menu__ellipsis" onClick={this.buttonToggle}>
                    <img className="kebab-menu__icon" src={kebabIcon} alt="Kebab icon." />
                </button>
                {this.state.isActive &&
                <div className="kebab-menu__remove-container">
                        <button className="kebab-menu__remove-button" onClick={this.props.removeHandler}>
                            Remove
                        </button>
                    </div>
                }
            </div>
        )
    }
}