import React from 'react';
import style from 'app/components/fireworks/style.scss';

export const FireworksComponent: React.FunctionComponent<{}> = React.memo((): JSX.Element => {
  function render(): JSX.Element {
    return <div className={style.fireworks} />;
  }

  return render();
});

export default FireworksComponent;
