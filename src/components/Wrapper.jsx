

function Wrapper({children, background}) {
  return (
    <div className={background}>
      <section className='p-5 pt-15 pb-15 sm:mx-70'>
        <div className='flex justify-center items-center'>
            <div className='w-15 h-[0.5px] mr-2 bg-accent/50'/>
         <img src="ee.svg" alt="" className=" border-accent/50 size-5" />
            <div className='w-15 h-[0.5px] ml-2 bg-accent/50'/>
</div>
         {children}
      </section>
    </div>
  )
}

export default Wrapper
