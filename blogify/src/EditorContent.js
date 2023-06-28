import "./editor.scss";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";

import SimpleImage from '@editorjs/simple-image';
import Checklist from "@editorjs/checklist";
import Embed from "@editorjs/embed";
import Quote from "@editorjs/quote";
import InlineCode from "@editorjs/inline-code";
import Undo from "editorjs-undo";
import ChangeCase from "editorjs-change-case";
import Marker from "@editorjs/marker";
import List from "@editorjs/list";
import Table from "editorjs-table";


const EditorContent = () => {
  const editor = new EditorJS({
    holder: "editorjs",

    tools: {
      header: {
        class: Header,
        config: {
          placeholder: "Enter a header",
          levels: [2, 3, 4],
          defaultLevel: 3,
        },
      },
    
     
      image: SimpleImage,
      checklist: {
        class: Checklist,
        inlineToolbar: true,
      },
      embed: {
        class: Embed,
        config: {
          services: {
            youtube: true,
            coub: true,
          },
        },
      },
      quote: {
        class: Quote,
        inlineToolbar: true,
        shortcut: "CMD+SHIFT+O",
        config: {
          quotePlaceholder: "Enter a quote",
          captionPlaceholder: "Quote's author",
        },
      },
      onReady: () => {
        new Undo({ editor });
      },
      changeCase: {
        class: ChangeCase,
        config: {
          showLocaleOption: true, // enable locale case options
          locale: "tr", // or ['tr', 'TR', 'tr-TR']
        },
      },

      inlineCode: {
        class: InlineCode,
        shortcut: "CMD+SHIFT+M",
      },
      Marker: {
        class: Marker,
        shortcut: "CMD+SHIFT+M",
      },

      table: {
        class: Table,
      },
  
      list: {
        class: List,
        inlineToolbar: true,
        config: {
          defaultStyle: "unordered",
        },
      },
    
    },
  });

    // const saveBtn = ()=>{
    //       EditorContent.save().then((outputData)=>{
    //           console.log('Article Data',outputData)
    //       }).catch((error)=>{
    //           console.log('saving failed:',error)
    //       });
    //   }
};

export default EditorContent;
