import { LineWave } from "react-loader-spinner";
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loaderWrapper}>
      <LineWave
        visible={true}
        height="100"
        width="100"
        color="#3b82f6"
        ariaLabel="line-wave-loading"
        wrapperStyle={{}}
        wrapperClass=""
        firstLineColor="#2563eb"
        middleLineColor="#3b82f6"
        lastLineColor="#60a5fa"
      />
    </div>
  );
};

export default Loader;