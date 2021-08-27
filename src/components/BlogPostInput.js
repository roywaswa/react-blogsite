import React from 'react'
import TextareaAutosize  from 'react-textarea-autosize'
import Editor from './Editor'


export default function BlogPostInput() {
	
	return (
		<div className="blog-post-input">
			{/*<TextareaAutosize/>*/}
			<Editor/>
		</div>
	);
}