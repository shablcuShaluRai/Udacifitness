import React, {Component} from 'react';
import {View} from 'react-native';
import {getMetricMetaInfo} from '../utils/helpers'

export default class AddEntry extends Component{
  render(){
    return(
      <View>
    {getMetricMetaInfo('bike').getIcon()}
        {getMetricMetaInfo('run').getIcon()}
            {getMetricMetaInfo('swim').getIcon()}
                {getMetricMetaInfo('eat').getIcon()}
                    {getMetricMetaInfo('sleep').getIcon()}
      </View>
    )
  }
}
