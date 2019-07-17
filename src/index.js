function getComponent(){
  return import(/* webpackChunkName:"lodash" */'lodash').then(({default: _}) => {
   element.innerHtml  = _.join(['hang','feng'],'-')
   return element
  })
}

getComponent()


