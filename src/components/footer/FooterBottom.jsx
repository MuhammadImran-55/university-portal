import { AlignJustify } from 'lucide-react'
import React from 'react'

const FooterBottom = () => {
  return (
    <div style={styles.div} >&copy; University of Okara. All Rights Reserved.</div>
  )
}

const styles = {
    div:{
      color:'#57595F',

        width: '100%',
        height: '60px',
        background: '#EFEDE7',
        // textAlign: 'center',
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        letterSpacing: '1px'

    }
}
export default FooterBottom