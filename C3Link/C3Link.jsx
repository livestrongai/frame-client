import './C3Link.css'

export default function C3Link ({ value }) {
  return (
    <div className='domain_divs' id={value}>
      <img className='domain_images' src={'https://www.google.com/s2/favicons?domain=' + value} />
      <a className='domain_values' target='_blank' href={'https://' + value} rel='noreferrer'>{value}</a>
    </div>
  )
}
