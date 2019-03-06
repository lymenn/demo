<template>
    <el-table
      v-loading="listLoading"
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
            {{ scope.$index}}
        </template>
      </el-table-column>
      <el-table-column label="Title">
        <template slot-scope="scope">
            {{ scope.row.title}}
        </template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template slot-scope="scope">
            {{ scope.row.author}}
        </template>
      </el-table-column>
      <el-table-column label="Pageviews" width="110" align="center">
        <template slot-scope="scope">
            {{ scope.row.pageviews}}
        </template>
      </el-table-column>
      <el-table-column label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status|statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Display_time" width="200" align="center">
        <template slot-scope="scope">
            <i class="el-icon-time"/>
            <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
    </el-table>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      tableData: null,
      listLoading: true
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.listLoading = true
      axios
        .get('https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin/table/list')
        .then(response => {
          this.tableData = response.data.data.items
          this.listLoading = false
        })
    }
  },
  filters: {
    statusFilter (status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  }
}
</script>
