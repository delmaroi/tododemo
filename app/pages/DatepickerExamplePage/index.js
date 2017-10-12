/*
 *
 * DatepickerExamplePage
 *
 */

import React, { PureComponent } from 'react';
import DatePicker from 'antd/lib/date-picker';
import TimePicker from 'antd/lib/time-picker';
import { fromJS } from 'immutable';

const {
  MonthPicker,
  RangePicker,
} = DatePicker;

export default class DatepickerExamplePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dates: fromJS({}),
    };
  }

  getDateChangeHandler(field) {
    return (date) => {
      this.setState(({ dates }) => ({
        dates: dates.set(field, date),
      }));
    };
  }

  render() {
    return (
      <div>
        <div className="msg msg--info">
          <p>
            Documentations:
          </p>
          <ul>
            <li><a href="https://ant.design/components/date-picker/" target="_blank">date-picker</a></li>
            <li><a href="https://ant.design/components/time-picker/" target="_blank">time-picker</a></li>
          </ul>
          <p>
            Note: please import styles into your CSS file:
          </p>
          <ul>
            <li>&quot;@import \&apos;~antd/lib/date-picker/style/index.css&apos;;&quot;</li>
            <li>&quot;@import &apos;~antd/lib/time-picker/style/index.css&apos;;&quot;</li>
          </ul>
        </div>

        <div>
          <label htmlFor="date-picker">Date picker</label>
          <DatePicker
            id="date-picker"
            onChange={this.getDateChangeHandler('date-picker')}
          />
        </div>
        <div>
          <label htmlFor="date-picker">Date picker (YYYY/MM/DD)</label>
          <DatePicker
            id="date-picker"
            format="YYYY/MM/DD"
            onChange={this.getDateChangeHandler('date-picker')}
          />
        </div>
        <div>
          <label htmlFor="month-picker">Month date picker</label>
          <MonthPicker
            id="month-picker"
            onChange={this.getDateChangeHandler('month-picker')}
          />
        </div>
        <div>
          <label htmlFor="date-range-picker">Date range picker</label>
          <RangePicker
            id="date-range-picker"
            onChange={this.getDateChangeHandler('date-range-picker')}
          />
        </div>
        <div>
          <label htmlFor="date-time-picker">Date time picker</label>
          <DatePicker
            id="date-time-picker"
            showTime
            onChange={this.getDateChangeHandler('date-time-picker')}
          />
        </div>
        <div>
          <label htmlFor="date-time-range-picker">Date time range picker</label>
          <RangePicker
            id="date-time-range-picker"
            showTime
            onChange={this.getDateChangeHandler('date-time-range-picker')}
          />
        </div>
        <div>
          <label htmlFor="time-picker">Time picker</label>
          <TimePicker
            id="time-picker"
            onChange={this.getDateChangeHandler('time-picker')}
          />
        </div>
        <pre>
          {JSON.stringify(this.state.dates.toJSON())}
        </pre>
      </div>
    );
  }
}
