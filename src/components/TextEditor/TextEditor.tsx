import { Component } from 'react'
import { convertFromRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import './TextEditor.scss'

const content = {
   entityMap: {},
   blocks: [
      {
         key: '637gr',
         text: 'Initialized from content state.',
         type: 'unstyled',
         depth: 0,
         inlineStyleRanges: [],
         entityRanges: [],
         data: {},
      },
   ],
}

export default class TextEditor extends Component {
   constructor(props: any) {
      super(props)
      const contentState = convertFromRaw(content)
      this.state = {
         contentState,
      }
   }

   onContentStateChange = (contentState: any) => {
      this.setState({
         contentState,
      })
   }

   render() {
      const { contentState }: any = this.state
      return (
         <div className="text-editor">
            <Editor
               wrapperClassName="demo-wrapper"
               editorClassName="demo-editor"
               onContentStateChange={this.onContentStateChange}
            />
            <textarea
               disabled
               value={JSON.stringify(contentState, null, 4)}
               style={{ display: 'block' }}
            />
         </div>
      )
   }
}
