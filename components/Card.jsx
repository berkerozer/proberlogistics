import cx from 'classnames';
import Link from 'next/link';

function Card(props) {
  return (
    <div
      className={cx('card', 'w-full', {
        'md:w-full': props.width == 12,
        'md:w-1/2': props.width == 6,
        'md:w-1/3': props.width == 4,
        'md:w-1/4': props.width == 3,
      })}
      style={{
        backgroundImage: `url(${props.imageURL})`,
      }}
    >
      <Link href={props.link}>
        <a>
          <div
            className={`p-10 w-100 h-full card-content relative ${props.color}`}
          >
            <h1
              className={`${
                props.textWhite ? 'text-white' : ''
              } text-3xl font-extralight`}
            >
              {props.title}
            </h1>
            <br />
            <p
              className={`${props.textWhite ? 'text-white' : ''} ${
                props.showContent ? '' : 'opak'
              }`}
              dangerouslySetInnerHTML={{ __html: props.content }}
            ></p>
            <span className='absolute right-10 bottom-10'>
              <props.Icon
                className={`${props.textWhite ? 'text-white' : ''} text-3xl`}
              />
            </span>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default Card;
