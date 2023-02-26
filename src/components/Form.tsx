const Form = ({submitHandler}:any) => {
    return (
        <form onSubmit={submitHandler}>
        <h1>Steam Cards Finder</h1>
        <p><b>Rest API made by <a title='original repo' target='_blank' href="https://github.com/LucasGenovese/Steam-API">Lucas Genovese</a></b></p>
        <div className='input-container'>
          <label>Session ID</label>
          <input autoComplete='OFF' type="text" placeholder='Session ID'/>
          <label>Browser ID</label>
          <input autoComplete='OFF' type="text" placeholder='Browser ID'/>
          <label>Steam Login Secure</label>
          <input autoComplete='OFF' type="text" placeholder='Steam login secure'/>
          <label>Web trade eligibility</label>
          <input autoComplete='OFF' type="text" placeholder='Web trade eligibility'/>
          <label>Steam Parental (only if you have it)</label>
          <input autoComplete='OFF' type="text" placeholder='Steam parental'/>
          <button>Search</button>
        </div>
      </form>
    )
}

export default Form