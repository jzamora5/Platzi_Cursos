import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function mapStateToProps(state) {
  return {
    guitarras: state.guitarras,
  };
}

class Guitarras extends Component {
  render() {
    return (
      <section id="guitarras" class="guitarras contenedor">
        <h2>Nuestra guitarras</h2>
        <div className="video-demo-contenedor">
          <div className="video-demo">
            <div className="video-responsive-contenedor">
              <iframe
                className="video-responsive-src"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/R1dW8M4EqYY"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        {this.props.guitarras.map((guitarra, index) => {
          return (
            <article className="guitarra" key={index}>
              <TransitionGroup>
                <CSSTransition
                  key={guitarra.image}
                  classNames="flicker"
                  timeout={{ enter: 500, exit: 500 }}
                >
                  <img
                    className="guitarra-image"
                    src={guitarra.image}
                    alt={guitarra.name}
                    width="350"
                  />
                </CSSTransition>
              </TransitionGroup>
              <TransitionGroup>
                <CSSTransition
                  key={guitarra.name}
                  classNames="fade"
                  timeout={{ enter: 300, exit: 300 }}
                  exit={false}
                >
                  <div className="contenedor-guitarra">
                    <h3 className="guitarra-name">{guitarra.name}</h3>
                    <ol>
                      {guitarra.features.map((feature, index) => {
                        return <li key={index}>{feature}</li>;
                      })}
                    </ol>
                  </div>
                </CSSTransition>
              </TransitionGroup>
            </article>
          );
        })}
      </section>
    );
  }
}

export default connect(mapStateToProps)(Guitarras);
