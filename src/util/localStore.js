export default {
    getItem: function(key){
        let value;
        try {
            value = localStorage.getItem(key)
        } catch (ex) {
            console.error('localStorage.getItem报错, ', ex.message)
        } finally {
            return value
        }
    },
    setItem: function(key, value) { 
        try {
            localStorage.setItem(key, value)
        } catch (ex) {
            console.error('localStorage.setItem报错, ', ex.message)
        }
    }
}