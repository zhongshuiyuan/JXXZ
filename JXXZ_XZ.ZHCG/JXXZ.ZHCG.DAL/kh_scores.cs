//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的。
//
//    手动更改此文件可能会导致应用程序中发生异常行为。
//    如果重新生成代码，则将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace JXXZ.ZHCG.DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class kh_scores
    {
        public int scoreid { get; set; }
        public Nullable<int> examineid { get; set; }
        public string deail { get; set; }
        public Nullable<double> deduct { get; set; }
        public Nullable<int> deductuserid { get; set; }
        public Nullable<System.DateTime> examinetime { get; set; }
    
        public virtual kh_examines kh_examines { get; set; }
    }
}