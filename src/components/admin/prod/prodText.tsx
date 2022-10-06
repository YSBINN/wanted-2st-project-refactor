import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AdminSubject } from '../../../styles/common';
import { useState } from 'react';
import { useEffect } from 'react';

const ProdText = () => {
    const [state, setState] = useState<any>({
        data: '',
        editor: null,
    });

    useEffect(() => {
        const editor = (
            <CKEditor
                id={'ck-editor-text'}
                editor={ClassicEditor}
                data={state.data}
                onReady={(editor: any) => {
                    console.log('Editor is ready to use!', editor);
                }}
            />
        );
        setState({ ...state, editor: editor });
    }, []);

    return (
        <>
            <AdminSubject>상품 제공 공시</AdminSubject>
            {state.editor}
        </>
    );
};
export default ProdText;
