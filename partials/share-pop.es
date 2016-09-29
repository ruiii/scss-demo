export default function SharePop({ show, onShare }) {
  const shareMap = {
    wechat: '微信好友',
    moments: '朋友圈',
    tencent: 'QQ 好友',
    weibo: '新浪微博',
    qzone: 'QQ 空间',
    copy: '复制链接',
  }
  const items = []
  for (let key in shareMap) {
    const title = shareMap[key]
    items.push(
      <div key={key}
           onClick={onShare.bind(this, key)}
           className={`share-item ${key}`}>
        { title }
      </div>
    )
  }

  return (
    <div id="SharePop" className={show ? 'show' : ''}>
      <div className="share-container">{ items }</div>
    </div>
  )
}
