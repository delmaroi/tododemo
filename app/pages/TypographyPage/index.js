import React, { PureComponent } from 'react';

export default class TypographyPage extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article className="app-content-inner">
        <h1>
          Header 1
        </h1>
        <h2>
          Header 2
        </h2>
        <h3>
          Header 3
        </h3>
        <h4>
          Header 4
        </h4>
        <h5>
          Header 5
        </h5>
        <h6>
          Header 6
        </h6>
        <p className="f-left">text left</p>
        <p className="f-center">text center</p>
        <p className="f-right">text right</p>
        <div className="space-big"></div>
        <p>
          Lorem ipsum dolor sit amet enim. Etiam ullamcorper. <a href="#abc">Suspendisse a pellentesque</a> dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis natoque penatibus et ultrices volutpat. Nullam wisi ultricies a, gravida vitae, dapibus risus ante sodales lectus blandit eu, tempor diam pede cursus vitae, ultricies eu, faucibus quis, porttitor eros cursus lectus, pellentesque eget, bibendum a, gravida ullamcorper quam. Nullam viverra consectetuer. Quisque cursus et, porttitor risus. Aliquam sem. In hendrerit nulla quam nunc, accumsan congue. Lorem ipsum primis in nibh vel risus. Sed vel lectus. Ut sagittis, ipsum dolor quam.
        </p>
        <p>Lorem ipsum dolor sit amet enim. <strong>Etiam ullamcorper</strong> sit amet enim</p>
        <p className="f-tiny">.f-tiny Lorem ipsum dolor sit amet enim.</p>
        <p className="f-small">.f-small Lorem ipsum dolor sit amet enim.</p>
        <p className="f-normal">.f-normal Lorem ipsum dolor sit amet enim.</p>
        <p className="f-medium">.f-medium Lorem ipsum dolor sit amet enim.</p>
        <p className="f-big">.f-big Lorem ipsum dolor sit amet enim.</p>
        <p className="f-huge">.f-huge Lorem ipsum dolor sit amet enim.</p>
        <blockquote>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <cite>Paulo Coelho</cite>
        </blockquote>
        <ul>
          <li>Lorem ipsum dolor sit amet enim. Etiam ullamcorper.</li>
          <li>
            Lorem ipsum dolor sit amet enim. Etiam ullamcorper.
            <ul>
              <li>Lorem ipsum dolor sit amet enim. Etiam ullamcorper.</li>
              <li>Lorem ipsum dolor sit amet enim. Etiam ullamcorper.</li>
              <li>Lorem ipsum dolor sit amet enim. Etiam ullamcorper.</li>
            </ul>
          </li>
          <li>Lorem ipsum dolor sit amet enim. Etiam ullamcorper.</li>
          <li>Lorem ipsum dolor sit amet enim. Etiam ullamcorper.</li>
        </ul>
        <ol>
          <li>Lorem ipsum dolor sit amet enim. Etiam ullamcorper.</li>
          <li>Lorem ipsum dolor sit amet enim. Etiam ullamcorper.</li>
          <li>Lorem ipsum dolor sit amet enim. Etiam ullamcorper.</li>
          <li>Lorem ipsum dolor sit amet enim. Etiam ullamcorper.</li>
        </ol>
        <p>
          <del>del text</del>
        </p>
        <code>
          Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna.
        </code>
      </article>
    );
  }
}
