import React from 'react'
import { WrapperHeader } from './style'
import TableComponent from '../TableComponent/TableComponent';
import { useMutationHooks } from '../../hooks/useMutationHook'

const AdminUser = () => {
    // const mutationDeletedMany = useMutationHooks(
    //     (data) => {
    //       const { token, ...ids
    //       } = data
    //       const res = UserService.deleteManyUser(
    //         ids,
    //         token)
    //       return res
    //     },
    //   )
  return (
    <div>
        <WrapperHeader>Quản lý người dùng</WrapperHeader>
        <div style={{ marginTop: '20px' }}>
        <TableComponent />
        </div>
    </div>
  )
}

export default AdminUser