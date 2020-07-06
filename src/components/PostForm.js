import React, { Component } from 'react'

class PostForm extends Component {

    constructor (props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange (e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div>
                <h1>Add Posts</h1>
                <br></br>
                <form>
                    <div>
                        <label>Title: </label>
                        <input type="text" name="title" value={this.state.title} onChange={this.onChange}/>
                    </div>
                    <br/>
                    <div>
                        <label>Body: </label>
                        <textarea name="body" value={this.state.body} onChange={this.onChange}/>
                    </div>
                    <br/>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default PostForm;
