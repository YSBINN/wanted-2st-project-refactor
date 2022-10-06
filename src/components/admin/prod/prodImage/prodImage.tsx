import { useCallback } from 'react';
import styled from 'styled-components';
import { AdminSubject } from '../../../../styles/common';
import ImageDorpozne from './dropZone/imageDrop';

export default function ProdImage({ prodFiles, setProdFiles }: any) {
    const onDropHandler = useCallback(
        (files: any[]) => {
            if (prodFiles.map <= 10 || files.length <= 10) {
                setProdFiles(
                    files.map(file =>
                        Object.assign(file, {
                            preview: URL.createObjectURL(file),
                        }),
                    ),
                );
            } else {
                alert('10개 이상의 파일을 등록할 수 없습니다');
            }
        },
        [setProdFiles, prodFiles],
    );

    const onPreviewDelete = useCallback(
        (preview: any) => {
            const deleteFiles = prodFiles.filter((v: { preview: any }) => v.preview !== preview);
            setProdFiles(deleteFiles);
        },
        [prodFiles],
    );

    return (
        <>
            <AdminSubject>
                이미지 등록 <span>(최대 10개)</span>
            </AdminSubject>
            <InfoPreviewContainer>
                {prodFiles.map((v: { preview: string | undefined }) =>
                    prodFiles.length <= 10 ? (
                        <InfoPreviewWrapper onClick={() => onPreviewDelete(v.preview)}>
                            <div>
                                <img src={v.preview} />
                                <p>파일 삭제</p>
                            </div>
                        </InfoPreviewWrapper>
                    ) : (
                        <div>이미지는 최대 10개까지만 등록할 수 있습니다</div>
                    ),
                )}
            </InfoPreviewContainer>
            <ImageDorpozne onDropHandler={onDropHandler} />
        </>
    );
}

const InfoPreviewContainer = styled.div`
    padding: 4px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    position: relative;
`;

const InfoPreviewWrapper = styled.div`
    width: 96px;
    height: 96px;
    z-index: 9999;
    margin: 4px;
    cursor: pointer;

    :hover {
        opacity: 0.5;
    }

    & > div {
        position: relative;
        width: 100%;
        height: 100%;

        & > img {
            max-width: 100%;
            max-height: 100%;
        }

        & > p {
            font-size: 12px;
            color: #222;
            text-align: center;
            width: 100%;
            position: absolute;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
        }
    }
`;
