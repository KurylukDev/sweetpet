import { collection, getDocs, where, orderBy, query, doc, getDoc} from '@firebase/firestore'
import  db  from './fbConfig'

export const firestoreFetch = async (idCategory) =>{
    let q
    if (idCategory) {
        q = query(collection(db, "products"), where('categoryId', '==', idCategory))
    }else{
        q = query(collection(db, "products"), orderBy('name'))
    }
    const querySnapshot = await getDocs(q)
    const dataFromFirestore = querySnapshot.docs.map(item => ({
        id: item.id,
        ...item.data()
    }))
    return dataFromFirestore
}


export const firestoreFetchOne = async (idItem) =>{
    const docRef = doc(db, "products", idItem)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()){
        return{
            id: idItem,
            ...docSnap.data()
        }
    }else{
        console.log('fail fetch')
    }
}