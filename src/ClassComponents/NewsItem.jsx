/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        return (
            <div className='col-xl-2 col-lg-3 col-mb-4 col-sm-6'>
                <div className="card" >
                    <img src={this.props.pic}  height={200}className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <hr />
                        <div className="source-date">
                            <p>{this.props.source}</p>
                            <p>{new Date(this.props.date).toLocaleDateString()}</p>
                        </div>
                        <hr />
                        <p className="card-text">{this.props.description}</p>
                        <a href={this.props.url} target='_blank' rel="noreferrer" className="btn btn-primary background w-100">Read Full Article</a>
                    </div>
                </div>
            </div>
        )
    }
}
