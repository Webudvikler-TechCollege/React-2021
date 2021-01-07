import styles from "./Section.module.scss";

export function Section(props) {

  let tags;
  if(props?.data?.tags?.map) {
    tags = props?.data?.tags?.map((tag, i) => {
      return <div key={i}>{tag}</div>;
    })
  } else {
    tags = <div>No tags</div>
  }
  return (
    <section className={styles.container}>
      <h2>{props.data.headline}</h2>
      <p>{new Date().toDateString()}</p>
      <p>{props.data.text}</p>
      <p>
        {/* {props?.data?.tags?.map ? (
          props?.data?.tags?.map((tag, i) => {
            return <div key={i}>{tag}</div>;
          })
        ) : (
          <div>No tags</div>
        )} */}
        {/* {props && props.data && props.data.map && props.data.tags.map((tag, i) => {
          return <div key={i}>{tag}</div>
        })} */}
        {tags}
      </p>
    </section>
  );
}
