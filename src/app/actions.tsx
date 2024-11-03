'use server'
import {
  redirect
} from 'next/navigation';
export async function createUser(prevState: any, formData: FormData) {
  const res = await fetch('https://dinghuo-c2.yonyoucloud.com/api/resource/getResourcesByPackage/md5?packageName=JS&isArchive=1&lang=zh-cn&md5=6fc8f604dfb5ed8400b148baa91e1b3e')
 
  console.log(res)
 
  redirect('/dashboard')
  
} 