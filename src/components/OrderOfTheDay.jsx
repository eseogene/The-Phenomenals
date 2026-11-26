
import Wrapper from './Wrapper'

const orders = [
  'Arrival of Guests',
  "Groom's arrival",
  "bride's arrival",
  "Chairman's opening remarks",
  'Opening Song and prayer',
  "marriage discourse",
  "exchange vows",
  "signing of marriage certificate",
  "chairman's closing remarks",
  "closing song and prayer"
  
]

function OrderOfTheDay() {
  return (
    <section className="order-section">
      <svg
        className="wave top-wave"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,80 C360,0 720,150 1440,60 L1440,150 L0,150 Z" />
      </svg>

      <Wrapper>
        <div className="order-content">
        <p className="mb-7 text-[40px] font-eb text-center mt-8 text-[#c49a42] sm:mb-3 capitalize">
            Event Programme
          </p>

          <h1 className='font-eb text-center align-middle items-center text-[#c49a42] mb-10'>
            Order of the Day
          </h1>

          <div className="order-divider" />

          <ul className="order-list">
            {orders.map((order, index) => (
              <li key={index} className="order-item capitalize bold text-xl sm:2xl">
                <span className="order-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="order-name">{order}</span>
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>

      <svg
        className="wave bottom-wave"
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,90 C360,150 720,0 1440,90 L1440,0 L0,0 Z" />
      </svg>
    </section>
  )
}

export default OrderOfTheDay

