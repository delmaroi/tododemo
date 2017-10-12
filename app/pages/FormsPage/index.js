import React, { PureComponent } from 'react';

export default class FormsPage extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="app-content-inner">
        <div className="msgs">
          <div className="msg msg--error">Lorem ipsum dolor sit</div>
          <div className="msg msg--warning">Lorem ipsum dolor sit</div>
          <div className="msg msg--success">Lorem ipsum dolor sit</div>
          <div className="msg msg--info">Lorem ipsum dolor sit</div>
        </div>
        <div className="form">
          <div className="form-item">
            <label htmlFor="i1" className="form-label">Form label</label>
            <input id="i1" type="text" className="textfield" placeholder="Text field" />
            <div className="msg msg--error">Lorem ipsum dolor sit</div>
          </div>
          <div className="form-item">
            <label htmlFor="i2" className="form-label">Form label</label>
            <input id="i2" type="password" className="textfield" placeholder="Text field" />
            <div className="msg msg--info">Lorem ipsum dolor sit</div>
          </div>
          <div className="form-item">
            <label htmlFor="i3" className="form-label">Form label</label>
            <textarea id="i3" rows="3" type="password" className="textarea" placeholder="Text field"></textarea>
            <div className="msg msg--info">Lorem ipsum dolor sit</div>
          </div>
          <div className="form-item">
            <label htmlFor="i4" className="form-label">Form label</label>
            <select className="select">
              <option>Lorem ipsum</option>
              <option>Lorem ipsum</option>
              <option>Lorem ipsum</option>
            </select>
          </div>
          <div className="form-item">
            <label htmlFor="r1"><input type="radio" name="r1" id="r1" /> Lorem ipsum dolor</label>
          </div>
          <div className="form-item">
            <label htmlFor="r2"><input type="radio" name="r1" id="r2" /> Lorem ipsum dolor</label>
          </div>
          <div className="form-item">
            <label htmlFor="c1"><input type="checkbox" id="c1" /> Lorem ipsum dolor</label>
          </div>
          <div className="form-item">
            <label htmlFor="c2"><input type="checkbox" id="c2" /> Lorem ipsum dolor</label>
          </div>
        </div>
        <div className="form-footer">
          <button className="button button--success button--block">.button .button--success .button--block</button>
        </div>
        <div className="form-footer form-footer--align_center">
          <button className="button">Default</button>
          <button className="button button--error">Error</button>
          <button className="button button--warning">Warning</button>
          <button className="button button--success">Success</button>
          <button className="button" disabled>Disabled</button>
        </div>
        <div className="form-footer_text form-footer_text--align_center">
          <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. <a href="#adsf">Suspendisse a pellentesque</a> dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. </p>
        </div>
      </div>
    );
  }
}
