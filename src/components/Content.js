import React, { useState } from 'react'
import icon from '../icon-copy--red.svg'
import data from './Data'
import useCopyToClipboard from '../hooks/useCopyToClipboard'

const Content = () => {

    const textoInicial = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    const [count, setCount] = useState(0)
    const [text, setText] = useState([textoInicial])
    const [copyToClipboard, { success }] = useCopyToClipboard()

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(typeof(count))
        setText(data.slice(0, parseInt(count)))
    }

  return (
      <>
        <section className='container-main'>
            <aside>
                <form onSubmit={handleSubmit}>
                    <input
                        type="number" 
                        maxLength="2" 
                        id='amount' 
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                    ></input>
                    <select className='' name="Select">
                        <option value="paragraphs">Paragraphs</option>
                        <option value="sentences">Sentences</option>
                        <option value="words">Words</option>
                    </select>
                    <button 
                        className='btn_generate' 
                        type="submit"
                    >Generate!</button>
                </form>
               
                        <button 
                            className='btn_copy'
                            onClick={() => {
                                copyToClipboard('This was copied')
                            }}
                        >
                            { success ? <span>Copied</span> :
                                <span>Copy</span>
                            }
                            <img src={icon}  alt="copy file icon"></img>
                        </button>
                    
                
            </aside>
        </section>
        <section className='container-data'>
            <aside>
                {parseInt(count) > 0 && parseInt(count) < 9 ? ( text.map((item, index) => 
                    <p key={index}>
                        {item}
                    </p>
                ))
                : ( <p>
                        {textoInicial}
                        <input type="text" value={textoInicial} style={{display: "none"}} />
                    </p>  )
                }               
            </aside>
        </section>
      </>
    
  )
}

export default Content