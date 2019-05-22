import React from 'react';
import style from 'app/components/fireworks/style.scss';

export class FireworksComponent extends React.Component<{}> {
  public render(): JSX.Element {
    return <div className={style.fireworks} />;
  }
}

export default FireworksComponent;
