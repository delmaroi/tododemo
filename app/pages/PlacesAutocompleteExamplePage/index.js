/*
 *
 * PlacesAutocompleteExamplePage
 *
 */

import React, { PureComponent } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { bind } from 'decko';

export default class PlacesAutocompleteExamplePage extends PureComponent {
  state = {
    address: '',
    geocodeResults: null,
    loading: false,
  };

  @bind
  handleSelect(address) {
    this.setState({
      address,
      loading: true,
    });

    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        this.setState({
          geocodeResults: this.renderGeocodeSuccess(lat, lng),
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          geocodeResults: this.renderGeocodeFailure(error),
          loading: false,
        });
      });
  }

  @bind
  handleChange(address) {
    this.setState({
      address,
      geocodeResults: null,
    });
  }

  renderGeocodeFailure(error) {
    return (
      <div role="alert">
        <strong>Error!</strong> {error}
      </div>
    );
  }

  renderGeocodeSuccess(lat, lng) {
    return (
      <div role="alert">
        <strong>Success!</strong> Geocoder found latitude and longitude: <strong>{lat}, {lng}</strong>
      </div>
    );
  }

  renderAutocompleteItemPartial({ formattedSuggestion }) {
    return (
      <div>
        <strong>{formattedSuggestion.mainText} </strong>
        <small>{formattedSuggestion.secondaryText}</small>
      </div>
    );
  }

  renderResultsPartial() {
    if (this.state.loading || !this.state.geocodeResults) {
      return null;
    }

    return (
      <div>{this.state.geocodeResults}</div>
    );
  }

  render() {
    const inputProps = {
      type: 'text',
      value: this.state.address,
      onChange: this.handleChange,
      autoFocus: true,
      placeholder: 'Search Places',
      name: 'Demo__input',
      id: 'my-input-id',
    };

    return (
      <div>
        <div className="msg msg--info">
          <p>
            Documentations:
          </p>
          <ul>
            <li><a href="https://github.com/kenny-hibino/react-places-autocomplete" target="_blank">places-autocomplete</a></li>
          </ul>
          <p>
            Note: To use this component, you are going to need to load Google Maps JavaScript API
          </p>
          <ul>
            <li>https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places</li>
          </ul>
        </div>

        <div>
          <PlacesAutocomplete
            onSelect={this.handleSelect}
            autocompleteItem={this.renderAutocompleteItemPartial}
            onEnterKeyDown={this.handleSelect}
            inputProps={inputProps}
          />
          {this.renderResultsPartial()}
        </div>
      </div>
    );
  }
}
